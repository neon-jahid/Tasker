import { useState } from 'react';
import SearchTask from './Task/SearchTask';
import TaskAction from './Task/TaskAction';
import TaskList from './Task/TaskList';
import AddTaskModal from './Task/AddTaskModal';

function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: 'Learn React',
        description: 'I want to learn react but never succeed',
        tags: ['Web', 'react', 'js'],
        priority: 'High',
        isFavourite: false,
    };
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    function handleAddTask(task) {
        setTasks([...tasks, task]);
        task.prevenetDeafult();
    }

    return (
        <section
            className='mb-20'
            id='tasks'>
            {showAddModal && <AddTaskModal onSave={handleAddTask} />}
            <div className='container'>
                <div className='p-2 flex justify-end'>
                    <SearchTask />
                </div>

                <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
                    <TaskAction onAddClick={() => setShowAddModal(true)} />
                    <TaskList
                        tasks={tasks}
                        showAddModal={showAddModal}
                    />
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
