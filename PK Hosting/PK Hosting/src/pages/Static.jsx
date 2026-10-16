import {Page,Note} from '../components/ui.jsx';
const C={about:['About PKHosting','PKHosting is a demonstration hosting brand built for an internship project. [Placeholder: company history, team and address are not verified.]'],
contact:['Contact','[Placeholder: real phone, email and address have not been provided.] Use the Support page to create a demo ticket.'],
privacy:['Privacy policy','DRAFT for review. This demo stores only a cart, demo account name and demo tickets in your own browser. Nothing is sent to a server.'],
terms:['Terms and conditions','DRAFT for review. This site is a non-commercial demonstration. No services are sold and no agreement is formed.']};
export default function Static({k}){const [t,b]=C[k];return <Page title={t}><p className="max-w-2xl">{b}</p><Note>Placeholder content, not verified company information or legal advice.</Note></Page>}
