import { App } from "./server";


try {
    const app = new App().app;
    const port = 4000;

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
} catch (error) {
    console.log(error);
}

