import Content from './Content';
import SideLefBar from './SideLefBar';

const Main = (props) => {
    return (
    <div className="d-flex justify-content-center flex-wrap mt-2"  style={{ width: '100%' }} >
        <SideLefBar/>
        <Content />
    </div>
    );
}

export default Main