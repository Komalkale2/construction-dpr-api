const { DailyReport } = require("../models");

exports.createDPR = async(req,res)=>{
 try{
   const report = await DailyReport.create({
     project_id:req.params.id,
     user_id:req.user.id,
     ...req.body
   });

   res.status(201).json({
     dprId:report.id,
     message:"DPR created"
   });
 }
 catch(err){
   res.status(500).json({error:err.message});
 }
};

exports.getDPRs = async(req,res)=>{
 const {date} = req.query;

 const where = {project_id:req.params.id};

 if(date) where.date = date;

 const reports = await DailyReport.findAll({where});

 res.json(reports);
};