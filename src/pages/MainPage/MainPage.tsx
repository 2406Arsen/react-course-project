import Content from "../../Components/Content/Content";

export interface Data {
    header: string;
    content: string;
    footer: string;
}

const data: Data = {
    header: 'Text for Header component',
    content: 'Text for Content component',
    footer: 'Text for Footer component',
};

export const MainPage = () => {
    return (
        <Content content={data.content} />
    )
}