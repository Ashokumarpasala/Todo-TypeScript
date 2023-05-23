import React from 'react';
import trashfill from '../images/trash-fill.svg'
import check from '../images/pencil-square.svg'
import pencil from '../images/check-circle.svg'
import logo from '../images/journal-richtext.svg'

interface TaskProps {
    task: {
      id: number;
      task: string;
      isCompleted: boolean;
    };
  }

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className='card w-50 m-3' style={{backgroundColor: 'lime'}}>
        <div className='d-flex justify-content-around '>
           <div className=''>
            <h3 className='p-1 m-3'>
            <img src={logo} alt="" style={{width: '30px'}} />
             {task.task}
            </h3>
           </div>
           <div className=''>
            <img src={check} alt="" className='p-1 m-3' style={{border: ' 3px solid blue', borderRadius: '50%'}} />
            <img src={pencil} alt=""  className='p-1 m-3' style={{border: ' 3px solid blue', borderRadius: '50%'}}  />
            <img src={trashfill} alt=""  className='p-1 m-3' style={{border: ' 3px solid blue', borderRadius: '50%'}} />
           </div>
        </div>
    </div>
  );
}

export default Task;
