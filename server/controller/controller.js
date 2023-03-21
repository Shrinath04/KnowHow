//controller.js


const userDb = require('../model/user');
const phyQuesDb = require('../model/phyQues');
const engQuesDb = require('../model/engQues');
const matQuesDb = require('../model/matQues');
const chemQuesDb = require('../model/cheQues');
const botQuesDb = require('../model/botQues');
const zooQuesDb = require('../model/zooQues');
const cseQuesDb = require('../model/cseQues');

const http = require('http');
const url = require('url');
const express = require('express');
const crypto = require('crypto');
const app = express();


exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const user = new userDb({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    await user
        .save(user)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}

exports.find = async (req, res) => {
    const pwdErr = "pwdErr";
    const accErr = "accErr";
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    else {
        const user = await userDb.findOne({ email: req.body.email });
        if (user) {
            if (user.password !== req.body.password) {
                res.locals.err = pwdErr;
                res.render('index');
            }
            else {
                req.session = req.session || {};
                req.session.isLoggedIn = true;
                res.locals.err = "success";
                res.redirect('/find/englishQues');
            }
        }
        else {
            res.locals.err = accErr
            res.render('index')
        }
    }
}

exports.logout = async (req, res) => {
    res.locals.err = ""
    res.render('index');
}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
}

// ADD Questions

exports.addEngQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var engQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await engQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/englishQues');
        return
    }
    const engQues = new engQuesDb({
        pqid: engQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })

    await engQues
        .save(engQues)
        .then(data => {
            res.redirect('/find/englishQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });

}

exports.addPhyQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var phyQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await phyQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/physicsQues');
        return
    }
    const phyQues = new phyQuesDb({
        pqid: phyQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })
    await phyQues
        .save(phyQues)
        .then(data => {
            res.redirect('/find/physicsQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}


exports.addChemQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var chemQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await chemQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/chemistryQues');
        return
    }
    const chemQues = new chemQuesDb({
        pqid: chemQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })
    await chemQues
        .save(chemQues)
        .then(data => {
            res.redirect('/find/chemistryQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}

exports.addBotQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var botQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await botQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/botanyQues');
        return
    }
    const botQues = new botQuesDb({
        pqid: botQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })
    await botQues
        .save(botQues)
        .then(data => {
            res.redirect('/find/botanyQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}

exports.addCseQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var cseQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await cseQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/computerQues');
        return
    }
    const cseQues = new cseQuesDb({
        pqid: cseQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })
    await cseQues
        .save(cseQues)
        .then(data => {
            res.redirect('/find/computerQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}

exports.addMatQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var matQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await matQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/mathsQues');
        return
    }
    const matQues = new matQuesDb({
        pqid: matQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })
    await matQues
        .save(matQues)
        .then(data => {
            res.redirect('/find/mathsQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}

exports.addZooQues = async (req, res) => {
    var minm = 10000000;
    var maxm = 99999999;
    var zooQId = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    var answersArray = [];
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const isQuesRepeat = await zooQuesDb.findOne({ question: req.body.question });
    if (isQuesRepeat) {
        res.redirect('/find/zoologyQues');
        return
    }
    const zooQues = new zooQuesDb({
        pqid: zooQId,
        question: req.body.question.toLowerCase(),
        answers: answersArray
    })
    await zooQues
        .save(zooQues)
        .then(data => {
            res.redirect('/find/zoologyQues');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}


//Find and render Questions

exports.findPhyQues = async (req, res) => {
    const phyQuestionObj = await phyQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();
    phyQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('phyQuestions')

}

exports.findBotQues = async (req, res) => {
    const botQuestionObj = await botQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();
    botQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('botQuestions')
}

exports.findChemQues = async (req, res) => {
    const chemQuestionObj = await chemQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();
    chemQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('chemQuestions')
}

exports.findCseQues = async (req, res) => {
    const cseQuestionObj = await cseQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();
    cseQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('cseQuestions')
}

exports.findEngQues = async (req, res) => {
    const engQuestionObj = await engQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();
    engQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('engQuestions')
}

exports.findMatQues = async (req, res) => {
    const matQuestionObj = await matQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();
    matQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('matQuestions')
}

exports.findZooQues = async (req, res) => {
    const zooQuestionObj = await zooQuesDb.find()
    const pqid = []
    const questions = []
    const ansMap = new Map();

    zooQuestionObj.forEach(element => {
        pqid.push(element.pqid)
        questions.push(element.question)
        ansMap.set(element.pqid, element.answers)
    });
    res.locals.pqid = pqid
    res.locals.questions = questions
    res.locals.ansMap = ansMap

    //Question not found error
    const err = "No err"
    res.locals.err = err

    res.render('zooQuestions')
}

//Find and render one ques

exports.findOnePhyQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('phyQuestions')
        return;
    }
    else {
        const phyOneQues = await phyQuesDb.findOne({ question: req.body.questionSearched.toLowerCase() });
        var err = "question found or not"
        if (phyOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(phyOneQues.pqid)
            questions.push(phyOneQues.question)
            ansMap.set(phyOneQues.pqid, phyOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('phyQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('phyQuestions')
            return;
        }
    }
}


exports.findOneBotQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('botQuestions')
        return;
    }
    else {
        const botOneQues = await botQuesDb.findOne({ question: req.body.questionSearched.toLowerCase() });
        var err = "question found or not"
        if (botOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(botOneQues.pqid)
            questions.push(botOneQues.question)
            ansMap.set(botOneQues.pqid, botOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('botQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('botQuestions')
            return;
        }
    }
}


exports.findOneChemQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('chemQuestions')
        return;
    }
    else {
        const chemOneQues = await chemQuesDb.findOne({ question: req.body.questionSearched.toLowerCase() });
        var err = "question found or not"
        if (chemOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(chemOneQues.pqid)
            questions.push(chemOneQues.question)
            ansMap.set(chemOneQues.pqid, chemOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('chemQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('chemQuestions')
            return;
        }
    }
}


exports.findOneCseQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('cseQuestions')
        return;
    }
    else {
        const cseOneQues = await cseQuesDb.findOne({ question: req.body.questionSearched.toLowerCase() });
        var err = "question found or not"
        if (cseOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(cseOneQues.pqid)
            questions.push(cseOneQues.question)
            ansMap.set(cseOneQues.pqid, cseOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('cseQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('cseQuestions')
            return;
        }
    }
}


exports.findOneEngQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('engQuestions')
        return;
    }
    else {
        const engOneQues = await engQuesDb.findOne({ question: req.body.questionSearched.toLowerCase() });
        var err = "question found or not"
        if (engOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(engOneQues.pqid)
            questions.push(engOneQues.question)
            ansMap.set(engOneQues.pqid, engOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('engQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('engQuestions')
            return;
        }
    }
}

exports.findOneMatQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('matQuestions')
        return;
    }
    else {
        const matOneQues = await matQuesDb.findOne({ question: req.body.questionSearched.toLowerCase()});
        var err = "question found or not"
        if (matOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(matOneQues.pqid)
            questions.push(matOneQues.question)
            ansMap.set(matOneQues.pqid, matOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('matQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('matQuestions')
            return;
        }
    }
}


exports.findOneZooQues = async (req, res) => {
    if (!req.body.questionSearched) {
        var err = "contentEmpty"
        res.locals.err = err
        res.render('zooQuestions')
        return;
    }
    else {
        const zooOneQues = await zooQuesDb.findOne({ question: req.body.questionSearched.toLowerCase()});
        var err = "question found or not"
        if (zooOneQues) {
            const pqid = []
            const questions = []
            const ansMap = new Map();

            pqid.push(zooOneQues.pqid)
            questions.push(zooOneQues.question)
            ansMap.set(zooOneQues.pqid, zooOneQues.answers)

            res.locals.pqid = pqid
            res.locals.questions = questions
            res.locals.ansMap = ansMap
            res.locals.err = err
            res.render('zooQuestions')
        }
        else {
            err = "quesNotFound"
            res.locals.err = err
            res.render('zooQuestions')
            return;
        }
    }
}
//ADD ANSWERS

exports.addPhyAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await phyQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await phyQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/physicsQues')
    }
    else {
        res.redirect('/find/physicsQues')
    }
}

exports.addChemAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await chemQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await chemQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/chemistryQues')
    }
    else {
        res.redirect('/find/chemistryQues')
    }
}

exports.addCseAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await cseQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await cseQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/computerQues')
    }
    else {
        res.redirect('/find/computerQues')
    }
}

exports.addEngAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await engQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await engQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/englishQues')
    }
    else {
        res.redirect('/find/englishQues')
    }
}

exports.addMatAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await matQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await matQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/mathsQues')
    }
    else {
        res.redirect('/find/mathsQues')
    }
}

exports.addZooAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await zooQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await zooQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/zoologyQues')
    }
    else {
        res.redirect('/find/zoologyQues')
    }
}

exports.addBotAns = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const answer = req.body.answer;
    const quesId = req.body.hiddenQuesId;
    const ques = await botQuesDb.findOne({ pqid: quesId });
    //answers is a array in db
    //answer is string got from front end
    if (ques) {
        await botQuesDb.updateOne({ pqid: quesId }, { $push: { answers: answer } })
        res.redirect('/find/botanyQues')
    }
    else {
        res.redirect('/find/botanyQues')
    }
}



//VOICE TO TEXT

exports.recognizeSpeech = async () => {
const fs = require('fs');
const { Transform } = require('stream');
const { Detector, Models } = require('vosk');
const recorder = require('node-record-lpcm16');

exports.recognizeSpeech = async () => {
  // Create a Vosk model from a pre-trained acoustic model
  const model = new Models('model-en-us');

  // Create a Vosk detector from the model
  const detector = new Detector({
    model: model,
    sampleRate: 16000,
  });

  // Create a transform stream to convert audio data to text
  const recognizer = new Transform({
    objectMode: true,
    transform(data, _, callback) {
      const result = detector.recognize(data);
      callback(null, result.text);
    },
  });

  // Start recording audio from the microphone
  const mic = recorder.record({
    sampleRate: 16000,
    threshold: 0, // Silence threshold (0 means never stop recording)
  });

  // Pipe the audio data to the recognizer stream
  mic.pipe(recognizer);

  // Log the recognized text as it comes in
  recognizer.on('data', text => {
    console.log(`Recognized text: ${text}`);
  });

  // Stop recording after 10 seconds
  setTimeout(() => {
    mic.stop();
  }, 10000);
}
}

