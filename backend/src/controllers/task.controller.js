import Todo from "../models/task.model.js";

//controller for creating task
const create = async (req, res) => {
    try {
        const { title, description} = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
          }

        const newTask = new Todo({
            title,
            description,
            status : "pending",
            userId: req.user.id
        });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message });
    }
}

//controller for getting all tasks
const findAll = async (req, res) => {
    try {
        const tasks = await Todo.find({userId: req.user.id});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message });
    }
}

const findOne = async (req, res) => {
    try {
        const task = await Todo.findById({_id:req.params.id, userId: req.user.id});
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message });
    }
}

const update = async (req, res) => {

    const {status} = req.body;
    const validStatuses = ['pending', 'in-progress', 'completed'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: `Status must be one of: ${validStatuses.join(', ')}` });
    }
    try {

        const task = await Todo.findByIdAndUpdate(
            {_id:req.params.id,userId: req.body},
            {status},
            { new: true });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'server error', error: error.message });
    }
}

const remove = async (req, res) => {    
    try {
        const task = await Todo.findByIdAndDelete({_id:req.params.id, userId: req.user.id});
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message });
    }
}

export { create, findAll, findOne, update, remove };