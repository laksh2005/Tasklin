import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../utils/taskSlice';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const TaskView = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
      <div className="relative z-[1] max-w-7xl mx-auto mt-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl 
                    border border-gray-700/30 hover:border-pink-500/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <span className="text-pink-500 text-sm font-medium px-3 py-1 bg-pink-500/10 rounded-full">
          All Time
        </span>
      </div>
      <h3 className="text-white font-medium mb-1">Total Tasks</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{tasks.length}</span>
        <span className="text-pink-500 text-sm mb-1">tasks</span>
      </div>
    </div>


    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl 
                    border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-green-500 text-sm font-medium px-3 py-1 bg-green-500/10 rounded-full">
          Done
        </span>
      </div>
      <h3 className="text-white font-medium mb-1">Completed</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{tasks.filter((task) => task.completed).length}</span>
        <span className="text-green-500 text-sm mb-1">tasks</span>
      </div>
    </div>


    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl 
                    border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-yellow-500 text-sm font-medium px-3 py-1 bg-yellow-500/10 rounded-full">
          In Progress
        </span>
      </div>
      <h3 className="text-white font-medium mb-1">Pending</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{tasks.filter((task) => !task.completed).length}</span>
        <span className="text-yellow-500 text-sm mb-1">tasks</span>
      </div>
    </div>


    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl 
                    border border-gray-700/30 hover:border-red-500/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-red-500 text-sm font-medium px-3 py-1 bg-red-500/10 rounded-full">
          Delayed
        </span>
      </div>
      <h3 className="text-white font-medium mb-1">Overdue</h3>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">
          {tasks.filter((task) => new Date(task.dueDate) < new Date() && !task.completed).length}
        </span>
        <span className="text-red-500 text-sm mb-1">tasks</span>
      </div>
    </div>
  </div>
        </div>

        <div className="z-[1] bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-400">Recent Tasks</h2>
            <span className="bg-blue-500/20 text-blue-400 text-sm py-1 px-3 rounded-full">
              {tasks.length} tasks
            </span>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="group relative bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 
                         hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className={`text-lg font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                        {task.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        task.completed 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {task.completed ? 'Completed' : 'In Progress'}
                      </span>
                    </div>

                    <div className="flex items-center mt-2 text-gray-400 text-sm">
                      <CalendarTodayIcon className="w-4 h-4 mr-2" />
                      <span>Due: {task.dueDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => dispatch(toggleTaskStatus(task.id))}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        task.completed
                          ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                          : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                      }`}
                    >
                      {task.completed ? (
                        <CheckCircleOutlineIcon className="w-6 h-6" />
                      ) : (
                        <RadioButtonUncheckedIcon className="w-6 h-6" />
                      )}
                    </button>

                    <button
                      onClick={() => dispatch(deleteTask(task.id))}
                      className="p-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 
                               transition-all duration-300"
                    >
                      <DeleteOutlineIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {task.description && (
                  <p className="mt-3 text-gray-400 text-sm">
                    {task.description}
                  </p>
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 
                              opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              </div>
            ))}

            {tasks.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No tasks found</p>
                <p className="text-sm mt-2">Add a new task to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default TaskView;