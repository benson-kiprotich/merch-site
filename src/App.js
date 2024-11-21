import './App.css';
import Header from './components/Header';
import PageContainer from './components/PageContainer';
import ProductControl from './components/ProductControl';

function App() {
  return (
    <>
      <PageContainer>
        <Header>Merchant Site</Header>
        <ProductControl />
      </PageContainer>
    </>
  );
}

export default App;
