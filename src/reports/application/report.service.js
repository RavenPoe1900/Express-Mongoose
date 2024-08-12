const User = require("../../users/domain/user.schema");
const Department = require("../../departments/domain/department.schema");
const mongoose = require("mongoose");

class ReportService {
  async getEvaluationReportForEmployee(reportId) {
    try {
      const report = await User.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(reportId) } },
        {
          $lookup: {
            from: "tests",
            localField: "tests",
            foreignField: "_id",
            as: "tests",
          },
        },
        {
          $lookup: {
            from: "evaluations",
            let: { testIds: "$tests._id" },
            pipeline: [
              { $match: { $expr: { $in: ["$_id", "$$testIds"] } } },
              {
                $lookup: {
                  from: "tests",
                  localField: "test",
                  foreignField: "_id",
                  as: "testDetails",
                },
              },
              { $unwind: "$testDetails" },
            ],
            as: "evaluations",
          },
        },
        {
          $lookup: {
            from: "tests",
            localField: "evaluations.test",
            foreignField: "_id",
            as: "evaluationTests",
          },
        },
        {
          $unwind: {
            path: "$evaluations",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$evaluationTests",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            email: 1,
            role: 1,
            tests: {
              _id: 1,
              name: 1,
              area: 1,
            },
            evaluations: {
              _id: 1,
              period: 1,
              state: 1,
              type: 1,
              score: 1,
              test: {
                _id: "$evaluationTests._id",
                name: "$evaluationTests.name",
                area: "$evaluationTests.area",
              },
            },
          },
        },
      ]);
      res.status(200).json({ status: 200, data: report });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  }

  async getDepartmentReport(departmentId) {
    try {
      const report = await Department.aggregate([
        // Filtrar por el ID del departamento si se proporciona
        {
          $match: {
            _id: new mongoose.Types.ObjectId(departmentId),
          },
        },
        {
          $lookup: {
            from: "areas",
            localField: "_id",
            foreignField: "department",
            as: "areas",
          },
        },
        { $unwind: { path: "$areas", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "users",
            localField: "areas._id",
            foreignField: "area",
            as: "users",
          },
        },
        { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "tests",
            localField: "areas.tests",
            foreignField: "_id",
            as: "tests",
          },
        },
        { $unwind: { path: "$tests", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "evaluations",
            localField: "tests._id",
            foreignField: "test",
            as: "evaluations",
          },
        },
        { $unwind: { path: "$evaluations", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            _id: 1,
            name: 1,
            description: 1,
            areas: {
              _id: "$areas._id",
              name: "$areas.name",
              tests: {
                _id: "$tests._id",
                name: "$tests.name",
                area: "$areas._id",
              },
              users: {
                _id: "$users._id",
                name: "$users.name",
                email: "$users.email",
                role: "$users.role",
                evaluations: {
                  _id: "$evaluations._id",
                  period: "$evaluations.period",
                  state: "$evaluations.state",
                  type: "$evaluations.type",
                  score: "$evaluations.score",
                  test: {
                    _id: "$tests._id",
                    name: "$tests.name",
                    area: "$areas._id",
                  },
                },
              },
            },
          },
        },
      ]);

      res.status(200).json({ status: 200, data: report });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  }
}

module.exports = new ReportService();
