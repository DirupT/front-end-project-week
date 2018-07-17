import React from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote, setNull } from '../../actions';
import { Link } from 'react-router-dom';
import ModalContainer from '../ModalContainer/ModalContainer';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.setNull();
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.note._id);
        this.props.history.push('/notes');
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <React.Fragment>
                {this.props.fetching || this.props.editing ? <div>Loading info...</div> :
                    <div className='note-container'>

                        <ModalContainer modal={this.state.modal} deleteNote={this.deleteNote} toggleModal={this.toggleModal}/>

                        <div className='note-links'>
                            <Link className='edit-link' to={this.props.note ? `/notes/${this.props.note._id}/edit` : null}>edit</Link>
                            <div onClick={this.toggleModal} className='delete-link' to='/delete'>delete</div>
                        </div>

                        <h3 className='note-header'>{this.props.note.title}</h3>
                        <p className='notes-paragraph'>{this.props.note.textBody}</p>

                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        fetching: state.fetchingNote,
        editing: state.editingNote
    }
}

export default connect(mapStateToProps, { getNote, deleteNote, setNull })(Note);