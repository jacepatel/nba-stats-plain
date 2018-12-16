class App {

    constructor() {
        this.config();
    }

    private config(): void{
        // Set your default config on startup
    }

    public start(): void {
        console.log("Fucking run this shit yo")
    }

    public testReturnOne(): number {
        return 1;
    }

}

export default new App();