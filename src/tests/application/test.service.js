const BaseService = require("../../_shared/service/base.service.js");
const Test = require("../domain/test.schema.js");
class TestService extends BaseService {
  constructor() {
    super(Test);
  }

  async createOrUpdateTest(data, populateOptions = [], selectOptions = null) {
    try {
      const { name, user, ...rest } = data;

      let existingTest = await this.model.findOne({ name });

      if (existingTest) {
        
        if (existingTest.users.includes(user)) {
          return { status: 400, error: 'User already exists in the test' };
        }

        existingTest = await this.model
          .findOneAndUpdate(
            { _id: existingTest._id, users: { $ne: user } },
            { $addToSet: { users: user } },
            { new: true }
          )
          .exec();

        if (populateOptions.length || selectOptions) {

          const populatedDoc = await this.findById(
            existingTest._id,
            populateOptions,
            selectOptions
          );

          return { status: 200, data: populatedDoc.data };
        }
        return { status: 200, data: existingTest };
      } else {
        const doc = new this.model({ name, users: [user], ...rest });
        const savedDoc = await doc.save();

        if (populateOptions.length || selectOptions) {
          const populatedDoc = await this.findById(
            savedDoc._id,
            populateOptions,
            selectOptions
          );
          return { status: 201, data: populatedDoc.data };
        }
        return { status: 201, data: savedDoc };
      }
    } catch (error) {
      return this.handleError(error);
    }
  }
}

module.exports = new TestService();
