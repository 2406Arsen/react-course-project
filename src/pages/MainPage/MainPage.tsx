import { useSelector } from "react-redux/es/exports";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

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
    const store = useSelector((store) => store)
    console.log(store, 'store');

    return (
        <>
            <Header title={data.header} />
            <Content content={data.content} />
            <Footer footer={data.footer} />
        </>
    )
}