import React, { Component } from 'react';
import '../App.css';
import Note from './Note';
import UpdateNotesContainer from './UpdateNotesContainer';
import SideBarContainer from '../SideBarContainer/SideBarContainer';
import NotesContainer from './NotesContainer';
import CreateNotesContainer from './CreateNotesContainer';
import HomeContainer from '../HomeContainer/HomeContainer';
import { Route } from 'react-router-dom';
import { getNotes } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NotesPage extends Component {
    componentDidMount() {
        // Gets all notes from the server
        this.props.getNotes();
    }
    
    logoutButton = () => {
        // Removes username / password from local storage then refreshes page
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        window.location.reload();
    }

    render() {
        return (
            <div className="App">

                {this.props.fetching ? <div>Fetching Notes</div> :
                    <React.Fragment>

                        <Route path='/' render={props => <SideBarContainer {...props} logout={this.logoutButton} />} />
                        <Route exact path='/' component={HomeContainer} />
                        <Route exact path='/notes' render={props => <NotesContainer {...props} notes={this.props.notes} />} />
                        <Route exact path='/notes/:id' component={Note} />
                        <Route path='/notes/:id/edit' component={UpdateNotesContainer} />
                        <Route path='/create' component={CreateNotesContainer} />

                    </React.Fragment>
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        fetching: state.fetchingNotes
    }
}
// Authenticate used to check if user is logged in / withRouter used so redux knows that it changed routes'
export default withRouter(connect(mapStateToProps, { getNotes })(NotesPage));