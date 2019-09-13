import React from 'react';
import axios from 'axios'
import {Alert, Button, Form, Input, InputGroup, InputGroupAddon, Spinner} from 'reactstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../App.css';

const api = 'http://localhost:5000';

function Home() {
    const [url, setUrl] = React.useState('');
    const [short, setShort] = React.useState('');
    const [error, setError] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);
    const [isCopied, setIsCopied] = React.useState(false);
    const getUrl = async (original) => {
        try {
            setLoading(true);
            const result = await axios.post(api, {original});
            setShort(result.data.short);

        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                {error && <Alert color="danger">
                    {error}
                </Alert>}
                <h1>URL shortener</h1>
                <Form>
                    <InputGroup>
                        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="url..."/>
                        <InputGroupAddon addonType="append">
                            <Button color="success" onClick={() => getUrl(url)}>Short it!</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
                <a href={short}>{short}</a>
                {short && <CopyToClipboard text={short} onCopy={() => setIsCopied(true)}>
                    <Button> {isCopied ? 'Copied' : 'Copy'}</Button>
                </CopyToClipboard>}

                {isLoading && <Spinner style={{width: '3rem', height: '3rem'}} type="grow"/>}
            </header>
        </div>
    )
}

export default Home;
