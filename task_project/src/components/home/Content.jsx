import { Button } from 'react-bootstrap';
import EmptyProject from '../others/contentComponents/EmptyProject';
import Tasks from '../others/contentComponents/Tasks';
import ContentAddTask from '../others/contentComponents/ContentAddTask';
import ContentHeader from '../others/contentComponents/ContentHeader';

const Content = (props) => {
    return (
    <div className="content">
        <ContentHeader/>
        <ContentAddTask/>
        <EmptyProject />
        <Button className="deleteProject" variant="info">Eliminar Proyecto</Button>
        {<Tasks/>}
    </div>
    );
}

export default Content