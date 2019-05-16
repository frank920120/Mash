// import React, { Component } from 'react';
// import { compose } from "recompose";
// import { withTracker } from "meteor/react-meteor-data";
// import { withStyles } from "@material-ui/core/styles";
// import styles from "./styles";
// class MessageBox extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//           value: props.value,
//         };
//       }
//       state = {
//         anchorEl: null
//       };
    
//       handleClick = event => {
//         this.setState({ anchorEl: event.currentTarget });
//       };
    
//       handleClose = () => {
//         this.setState({ anchorEl: null });
//       };
//       render() {
//         const { anchorEl } = this.state;
//         const { classes, currentUserId } = this.props;
//         return (
//             <div>
//               {/* <Button
//                 variant="text"
//                 color="primary"
//                 disableFocusRipple={true}
//                 disableRipple={true}
//                 className={classes.messageButton}
//                 aria-owns={anchorEl ? 'simple-menu' : undefined}
//                 aria-haspopup="true"
//                 onClick={this.handleClick}
//               >
//                 <MoreVertIcon />
//               </Button>
//               <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={this.handleClose}
//               >
//                 <MenuItem
//                   onClick={this.handleClose}
//                   component={Link}
//                   to="/profile"
//                 >
//                   <img
//                     src={fingerLogo}
//                     alt="profile logo"
//                     className={classes.menulogo}
//                   />Profile
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => {
//                     logoutMutation().catch(error => window.alert(error));
//                     this.setState({ anchorEl: null });
//                   }}
//                 >
//                   <img
//                     src={powerLogo}
//                     alt="log out logo"
//                     className={classes.menulogo}
//                   />Logout
//                 </MenuItem>
//               </Menu>
//             </div>
//             <div>
// <Dialog
//         disableBackdropClick
//         disableEscapeKeyDown
//         maxWidth="xs"
//         onEntering={this.handleEntering}
//         aria-labelledby="confirmation-dialog-title"
//         {...other}
//       >
//         <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
//         <DialogContent>
//           <RadioGroup
//             ref={ref => {
//               this.radioGroupRef = ref;
//             }}
//             aria-label="Ringtone"
//             name="ringtone"
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             {options.map(option => (
//               <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
//             ))}
//           </RadioGroup>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.handleCancel} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={this.handleOk} color="primary">
//             Ok
//           </Button>
//         </DialogActions>
//       </Dialog> */}
//   </div>

//         )}    
// }
// function MessageBox(props) {
//   const { classes, currentUserId } = props;
//   return (<div>

//   </div>);
// }

// export default compose(
//     withStyles(styles),
//     withTracker(() => {
//       const currentUserId = Meteor.userId();
//       return {
//         currentUser: Meteor.user(),
//         currentUserId
//       };
//     })
//   )(MessageBox);