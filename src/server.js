import {app} from './index';

const PORT = process.env.PORT;

app.listen(
    PORT, () => {
        console.log( `servidor levantado en http:localhost:${PORT} `)
    }
) 



