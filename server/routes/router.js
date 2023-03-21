const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/',services.indexRoute);
route.get('/sign-up',services.signupRoute);

route.post('/api/users/signup',controller.create);
route.post('/api/users/login',controller.find);
route.get('/api/users/logout',controller.logout);


//find and display Questions
route.get('/find/physicsQues',controller.findPhyQues);
route.get('/find/mathsQues',controller.findMatQues);
route.get('/find/englishQues',controller.findEngQues);
route.get('/find/chemistryQues',controller.findChemQues);
route.get('/find/botanyQues',controller.findBotQues);
route.get('/find/zoologyQues',controller.findZooQues);
route.get('/find/computerQues',controller.findCseQues);


//find and display Questions
route.post('/findOne/physicsQues',controller.findOnePhyQues);
route.post('/findOne/mathsQues',controller.findOneMatQues);
route.post('/findOne/englishQues',controller.findOneEngQues);
route.post('/findOne/chemistryQues',controller.findOneChemQues);
route.post('/findOne/botanyQues',controller.findOneBotQues);
route.post('/findOne/zoologyQues',controller.findOneZooQues);
route.post('/findOne/computerQues',controller.findOneCseQues);


//Add Questions
route.post('/api/questions/phy',controller.addPhyQues);
route.post('/api/questions/eng',controller.addEngQues);
route.post('/api/questions/cse',controller.addCseQues);
route.post('/api/questions/chem',controller.addChemQues);
route.post('/api/questions/zoo',controller.addZooQues);
route.post('/api/questions/bot',controller.addBotQues);
route.post('/api/questions/mat',controller.addMatQues);


//Add Answers
route.post('/api/answers/phy',controller.addPhyAns);
route.post('/api/answers/eng',controller.addEngAns);
route.post('/api/answers/cse',controller.addCseAns);
route.post('/api/answers/chem',controller.addChemAns);
route.post('/api/answers/zoo',controller.addZooAns);
route.post('/api/answers/bot',controller.addBotAns);
route.post('/api/answers/mat',controller.addMatAns);



//record voice

route.post('/api/recordVoice',controller.recognizeSpeech);

module.exports = route;