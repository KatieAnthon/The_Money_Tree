import * as DocumentPicker from 'expo-document-picker';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const UploadStatement = () => {

    const uploadFileOnPressHandler = async () => {
        try {
            const pickedFile = await DocumentPicker.getDocumentAsync({
                type: 'application/csv',
            });
            if (pickedFile.type == 'success') {
                console.log(pickedFile.uri)

                const response = fetch("http://192.168.0.102:8080/spendanalysis/spendtotals/add", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/csv'
                    },
                    body: pickedFile,
                })

                
            }
        } catch (error) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
            } else {
                throw error
            }
        }
    }

    return (
    <Button 
    title="Upload new Statement" 
    onPress={() => 
        uploadFileOnPressHandler() 
    }
    />
    )
}
export default UploadStatement;