import React from 'react';
import NotesCard from './NotesCard';
import { NotesWrapper, NotesCards, SearchForm, MainNotesHeader } from '../ReusableComponents/Notes';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // Maps over all notes and passes them down to the NotesCard component
    render() {
        let notes = this.props.notes;
        let search = this.state.searchString.trim().toLowerCase().replace(/\\/g, "\\\\");

        if (search.length > 0) {
            notes = notes.filter(note => note.title.toLowerCase().match(search)
                || note.textBody.toLowerCase().match(search)
                || note.tags.filter(tag => tag.toLowerCase().match(search)).length > 0);
        }

        return (
            <NotesWrapper>

                <SearchForm>
                    <input onChange={this.handleInput} value={this.state.searchString} name='searchString' type='text' placeholder='Search' />
                </SearchForm>

                <MainNotesHeader main>Your Notes:</MainNotesHeader>

                <NotesCards>
                    {notes.map(note => <NotesCard key={note._id} note={note} />)}
                </NotesCards>

            </NotesWrapper>
        );
    }

}

export default NotesContainer;