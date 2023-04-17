import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const GeneratePdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>hello world</Text>
        <Text className='bg-dark'>I am happy</Text>
      </View>
    </Page>
  </Document>
);

export default GeneratePdf


{/* <PDFDownloadLink document={<GeneratePdf/>} fileName='FORM'> 
          {({loading})=> <button>{loading?'Loading..':'Download'}</button>}
        </PDFDownloadLink> */}