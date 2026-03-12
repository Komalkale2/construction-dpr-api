const { Project, DailyReport } = require("../models");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      created_by: req.user.id
    });

    res.status(201).json({
      projectId: project.id,
      message: "Project created"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
};

exports.getProject = async (req, res) => {
  const project = await Project.findByPk(req.params.id, {
    include: [DailyReport]
  });

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.json(project);
};

exports.updateProject = async (req, res) => {
  await Project.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Project updated" });
};

exports.deleteProject = async (req, res) => {
  await Project.destroy({ where: { id: req.params.id } });
  res.json({ message: "Project deleted" });
};