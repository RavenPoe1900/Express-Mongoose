const ReportService = require("../application/report.service");

exports.getEvaluationReportForEmployee = async (req, res) => {
  const result = await ReportService.getEvaluationReportForEmployee(
    req.params.reportId
  );
  res.status(result.status).json(result);
};

exports.getDepartmentReport = async (req, res) => {
  const result = await ReportService.getDepartmentReport(
    req.params.departmentId
  );
  res.status(result.status).json(result);
};
