import * as DocumentPicker from 'expo-document-picker';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


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
        <Stack.Screen options={{ title: "upload statement" }} >
    <Pressable className="bg-dark
    px-2
    text-white 
    border border-dark rounded mt-2
    hover:bg-slate-300
    active:bg-slate-500"  
    onPress={() => 
        uploadFileOnPressHandler() 
    } >
        <Text className="text-lg text-white font-semibold" >Upload Statement</Text>
    </Pressable>
    )
}
export default UploadStatement;