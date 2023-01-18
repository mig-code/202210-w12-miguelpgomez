import React from 'react';

import { Layout } from '../layout/layout';
import List from '../list/list';
import ModalSpeak from '../modal.speak/modal.speak';

function App() {
    return (
        <Layout>
            <>
                <List></List>
                <ModalSpeak></ModalSpeak>
            </>
        </Layout>
    );
}

export default App;
