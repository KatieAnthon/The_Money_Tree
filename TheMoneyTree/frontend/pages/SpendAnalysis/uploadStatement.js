import * as DocumentPicker from 'expo-document-picker';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const UploadStatement = () => {

    const uploadFileOnPressHandler = async () => {
        try {
            const pickedFile = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
            });
            if (pickedFile.type == 'success') {
                console.log(pickedFile.uri)
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
    title="statement" 
    onPress={() => 
        uploadFileOnPressHandler() 
    }
    />
    )
}
export default UploadStatement;