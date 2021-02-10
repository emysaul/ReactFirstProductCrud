import Content from './Content';
import SideLefBar from './SideLefBar';

const Main = (props) => {
    return (
    <div className="main" >
        <SideLefBar/>
        <Content />
    </div>
    );
}

export default Main