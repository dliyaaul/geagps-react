import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';

// Mendefinisikan tipe untuk properti tombol
interface CustomButtonProps {
    title: string; // Teks yang akan ditampilkan pada tombol
    onPress: (event: GestureResponderEvent) => void; // Fungsi yang dipanggil ketika tombol ditekan
    styles?: object; // Gaya kustom (opsional)
    stylePressed?: object; // Gaya kustom (opsional)
    styleUnpressed?: object; // Gaya kustom (opsional)
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, styles, stylePressed, styleUnpressed }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            {({ pressed }) => (
                <Text style={pressed ? stylePressed : styleUnpressed}>{title}</Text>
            )}
        </Pressable>
    );
};

export default CustomButton;
