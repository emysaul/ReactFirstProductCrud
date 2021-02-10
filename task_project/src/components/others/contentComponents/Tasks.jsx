import Task from './Task'
export default ({onChangeStatus, onEdit, onDelete}) => {
    var tasks = [
                    "Configurar Mongo Db Alias 1",
                    "Configurar Mongo Db Alias 2",
                    "Configurar Mongo Db Alias 3"
                ].map((e)=> <Task onChangeStatus={onChangeStatus} onEdit={onEdit} onDelete={onDelete} title="Configurar Mongo Db Alias" className="m-2"/>)
    return (
        <div className="tasks">{tasks}</div>
    );
}