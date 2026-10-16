import {Link} from 'react-router-dom';import {Page} from '../components/ui.jsx';
export default function NotFound(){return <Page title="Page not found" intro="This page does not exist in the demo."><Link className="btn" to="/">Back to home</Link></Page>}
