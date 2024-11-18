import "./PageTitle.css";

interface PageTitleProps {
    title: string;
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <div className="titre">
            <h1 >{props.title}</h1>
        </div>
    );  
};

export default PageTitle;