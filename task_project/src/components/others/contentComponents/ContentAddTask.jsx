import { Form, Button } from 'react-bootstrap';
import AddTask from './AddTask';

export default ({onAddTask}) => {
    return (
        <div className="contentAddTask">
            <AddTask onAddTask={onAddTask} />
        </div>
    );
}