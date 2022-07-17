/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const chai = require('chai');
// eslint-disable-next-line import/no-unresolved
const chaiHttp = require('chai-http');
const server = require('../app');

const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);

describe('/POST bmi', async () => {
    const data = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female","HeightCm": 167, "WeightKg": 82}]
    it('it should give BMI results', async () => {
        const res = await chai.request(server)
            .post('/bmi')
            .send(data);
        expect(res.status).to.equal(200);
        expect(res.body).should.be.a('object');
    });
});