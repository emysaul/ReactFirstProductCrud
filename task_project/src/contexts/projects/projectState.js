import React, { useReducer } from 'react'
import { ADD_PROJECT, CHANGE_ALERT_ADD_PROJECT, SHOW_FORM_PROJECT } from '../../types'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

const projects = [
]
const ProjectState = props => {
    const initialState = {
        form : false,
        alertAddProject : false,
        projects: projects
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = (status) => {
        dispatch({
            type: SHOW_FORM_PROJECT,
            payload: status
        })
    }

    const changeAlertAddProject = (status) => {
        dispatch({
            type: CHANGE_ALERT_ADD_PROJECT,
            payload: status
        })
    }

    const addProject = (project) => {
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                alertAddProject: state.alertAddProject,
                showForm: showForm,
                changeAlertAddProject: changeAlertAddProject,
                addProject: addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState