import Overview from "../components/Overview/Overview";
import { ContentLayout } from "../styles/Layout.style";
import { SectionTitle } from '../components/Overview/Overview.style'

const Content = (view) => {
  return (
    <ContentLayout>
      <SectionTitle>Overview</SectionTitle>

      <Overview/>
    </ContentLayout>
  );
};

export default Content;
