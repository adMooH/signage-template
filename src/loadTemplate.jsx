import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import ResolveRSS from './loadRSS';
import TemplatePreview from './templatePreview';
import Typography from '@material-ui/core/Typography';
import logo from './logo.png';
import TextField from '@material-ui/core/TextField';
import ReactJson from 'react-json-view'
import FormLabel from '@material-ui/core/FormLabel';


const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		margin: "5%",
	},
	menuButton: {
		top: 0,
		zIndex: 9999999
	},
	logo: {
		display: "block",
		margin: "auto",
		padding: "2%",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "13%",
		height: "13%"
	},
	submit: {
		marginTop: "5%"
	},
	template: {
		width: "100%",
		height: "100%",
		zIndex: "10",
		top: "0",
		left: "0",
		position: "fixed",
		textAlign: "center"
	}
});



class Alert extends React.Component {
	render() {
		return (
			<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
				<DialogTitle id="simple-dialog-title">{this.props.text}</DialogTitle>
			</Dialog>
		);
	}
}


class LoadTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getTemplate: props.getTemplate,
			rssUrl: "",
			templateItems: [],
			openDialog: false,
			dialogText: "",
			isPreview: true
		};
		this.ResolveRSS = new ResolveRSS();

		this.onRSSUrlChange = this.onRSSUrlChange.bind(this);
		this.loadRssItems = this.loadRssItems.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.previewRss = this.previewRss.bind(this);
	}

	render() {
		const { classes } = this.props;
		if (this.state.templateItems.length <= 0 || this.state.isPreview) {
			return (
				<div>
					<Paper className={classes.root} elevation={1}>
						<img className={classes.logo} src={logo} />
						<Typography component="h1" variant="h3" align="center">
							adMooH Template
            			</Typography>
						<div>
							<form onSubmit={this.loadRssItems}>
								<CssBaseline />
								<FormControl margin="normal" fullWidth>
									<InputLabel htmlFor="template">Template</InputLabel>
									<Input
										disabled
										name="template"
										type="text"
										value={process.env.ADMOOH_TEMPLATE} />
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="rss-url">RSS URL</InputLabel>
									<Input
										name="rss-url"
										type="url"
										id="rss-url"
										value={this.state.rssUrl}
										onChange={this.onRSSUrlChange} />
								</FormControl>
								<TextField									
									label="Width"
									type="number"
									InputLabelProps={{
										shrink: true,
									}}
									margin="normal"
								/>
								<TextField									
									label="Height"
									type="number"
									className={classes.textField}
									InputLabelProps={{
										shrink: true,
									}}
									margin="normal"
								/>
								<div className={classes.submit}>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"

									>Load Template
									</Button>
									<Button
										style={{ marginTop: "5px" }}
										type="button"
										fullWidth
										variant="contained"
										color="default"
										onClick={this.previewRss}
									>Preview RSS
							  </Button>
								</div>
							</form>
							<FormLabel style={{ marginTop: "5px" }} component="legend">Preview</FormLabel>
							<ReactJson style={{ marginTop: "2%" }} src={this.state.templateItems} theme="monokai" collapsed={false} />
						</ div>
					</Paper>
					<Alert text={this.state.dialogText} open={this.state.openDialog} onClose={this.closeDialog} />
				</div >
			)
		} else {
			return (
				<div className={classes.template}>
					<TemplatePreview getTemplate={this.state.getTemplate} data={this.state.templateItems} />
				</div>
			)
		}
	}

	closeDialog() {
		this.setState({ openDialog: false });
	}

	reloadPage() {
		location.reload();
	}

	onRSSUrlChange(e) {
		this.setState({ rssUrl: e.target.value });
	}


	previewRss(e) {
		e.preventDefault();
		this.setState({ dialogText: "Loading RSS Items ...", openDialog: true });
		const rss = this.state.rssUrl;
		this.ResolveRSS.getRSSItems(rss).then(items => {
			this.setState({ isPreview: true, openDialog: false, templateItems: items });
		}).catch(err => {
			this.setState({ dialogText: 'Fail to load rss items !', openDialog: true });
		});
	}

	loadRssItems(e) {
		e.preventDefault();
		if (this.state.templateItems.length <= 0) {
			this.setState({ dialogText: "Loading RSS Items ...", openDialog: true });
			const rss = this.state.rssUrl;
			this.ResolveRSS.getRSSItems(rss).then(items => {
				this.setState({ isPreview: false, templateItems: items });
			}).catch(err => {
				this.setState({ dialogText: 'Fail to load rss items !', openDialog: true });
			});
		} else {
			this.setState({ isPreview: false });
		}

	}

}


export default withStyles(styles)(LoadTemplate);