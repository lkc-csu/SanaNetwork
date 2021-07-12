// global.tsx contains the page name in
// the pageName variable.  there is a private
// name, a setter, and a getter.  the drawer
// navigator uses this to populate the contents
// of the drawer depending on the page.

const Variables = () => {

    private thePage:string = '';

    public getThePage() {
        return this.thePage;
    };

    public setThePage(newName:string) {
        this.thePage = newName;
    };
};

export default Variables;