import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import { openDialog, MyDispatch } from '../../../Actions/Actions';
import { AppState } from '../../../Reducers/reducer';
import { DIALOGS } from '../../../Actions/actionTypes';

function MoveAction(props: MoveActionProps) {
    const { handleClick } = props;

    return (
        <MenuItem onClick={() => handleClick()}>
            <ListItemIcon>
                <HowToVoteIcon />
            </ListItemIcon>
            <Typography variant="inherit">
                Move
            </Typography>
        </MenuItem>        
    );
}

interface MoveActionProps {
    handleClick(): void;
}

const mapStateToProps = (state: AppState) => {
    return {};
};

const mapDispatchToProps = (dispatch: MyDispatch) => {
    return {
        handleClick: () => {
            dispatch(openDialog(DIALOGS.MOVE));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveAction);
