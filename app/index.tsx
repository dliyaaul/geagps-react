import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
    Easing,
    Extrapolation,
    ReduceMotion,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import CustomButton from './CustomLibrary/CustomButton';
import RandyIcon from './CustomLibrary/CustomIcon';

export default function Index() {
    const [showPassword, setShowPassword] = useState(false);
    const [keyboardOffset, setKeyboardOffset] = useState(0);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [password, setPassword] = useState('');
    const emailLabelAnim = useSharedValue(0);
    const passwordLabelAnim = useSharedValue(0);
    const router = useRouter();
    const isKeyboardVisible = keyboardOffset > 0;

    useEffect(() => {
        const keyboardDidShow = () => {
            if (Platform.OS !== 'ios') setKeyboardOffset(moderateScale(170));
        };
        const keyboardDidHide = () => {
            if (Platform.OS !== 'ios') setKeyboardOffset(-100);
        };

        const showSub = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const hideSub = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    useEffect(() => {
        emailLabelAnim.value = withTiming(isEmailFocused || email !== '' ? 1 : 0, { duration: 100, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System, });
        passwordLabelAnim.value = withTiming(isPasswordFocused || password !== '' ? 1 : 0, { duration: 100, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System, });
    }, [isEmailFocused, email, isPasswordFocused, password]);

    const emailLabelStyle = useAnimatedStyle(() => ({
        top: interpolate(emailLabelAnim.value, [0, 1], [20, -10], Extrapolation.CLAMP),
        fontSize: interpolate(emailLabelAnim.value, [0, 1], [12, 14], Extrapolation.CLAMP),
        paddingHorizontal: interpolate(emailLabelAnim.value, [0, 1], [0, 2], Extrapolation.CLAMP),
        backgroundColor: emailLabelAnim.value === 1 ? 'rgba(242, 242, 242, 1)' : 'rgba(242, 242, 242, 0)',
        color: emailLabelAnim.value === 1 ? '#4A4B4D' : '#4A4B4D',
    }));

    const passwordLabelStyle = useAnimatedStyle(() => ({
        top: interpolate(passwordLabelAnim.value, [0, 1], [20, -10], Extrapolation.CLAMP),
        fontSize: interpolate(passwordLabelAnim.value, [0, 1], [12, 14], Extrapolation.CLAMP),
        paddingHorizontal: interpolate(passwordLabelAnim.value, [0, 1], [0, 2], Extrapolation.CLAMP),
        backgroundColor: passwordLabelAnim.value === 1 ? 'rgba(242, 242, 242, 1)' : 'rgba(242, 242, 242, 0)',
        color: passwordLabelAnim.value === 1 ? '#4A4B4D' : '#4A4B4D',
    }));

    const handleLogin = () => {

        router.push('/(tabs)');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                className="h-full w-full"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : keyboardOffset}
            >
                <Image
                    source={require("../assets/images/Background Image/Bluesky Login Transparent.png")}
                    className="h-full w-full absolute"
                />

                {!isKeyboardVisible && (
                    <View className="h-full w-full absolute items-center pt-16">
                        <Image
                            style={styles.logo}
                            source={require("../assets/images/Logo Image/Gea GPS.png")}
                            resizeMode="contain"
                        />
                    </View>
                )}

                <View className="h-full w-full" style={{ flex: 1 }}>
                </View>

                <View className="w-full" style={styles.containerLogin}>
                    <View style={styles.containerSelamatDatang}>
                        <Text style={styles.text} className="font-poppins-semibold">
                            Hey, Welcome{'\n'}back!
                        </Text>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={[styles.loginInput, { marginBottom: moderateScale(15)}]}
                                value={email}
                                onChangeText={setEmail}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                                placeholder=""
                            />
                            <Animated.Text
                                style={[
                                    {
                                        position: 'absolute',
                                        left: moderateScale(14),
                                        fontFamily: 'Poppins-Regular',
                                        borderRadius: 12,
                                        zIndex: 2,
                                        fontSize: 12,
                                    },
                                    emailLabelStyle,
                                ]}
                            >
                                Email
                            </Animated.Text>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={[styles.loginInput, { marginBottom: moderateScale(5)}]}
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                                placeholder=""
                            />
                            <Animated.Text
                                style={[
                                    {
                                        position: 'absolute',
                                        left: moderateScale(14),
                                        fontFamily: 'Poppins-Regular',
                                        borderRadius: 12,
                                        zIndex: 2,
                                        fontSize: 12,
                                    },
                                    passwordLabelStyle,
                                ]}
                            >
                                Password
                            </Animated.Text>
                            <TouchableOpacity
                                style={{ alignContent: 'flex-end', position: 'absolute', right: 0, paddingHorizontal: moderateScale(14), paddingVertical: moderateScale(16) }}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <RandyIcon
                                    name={showPassword ? "OpenEye" : "CloseEye"}
                                    size={moderateScale(22)}
                                    color="#4A4B4D"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignSelf: 'flex-end'}}>
                                <Text style={{ color: '#4A4B4D', fontSize: 12, fontFamily: 'Poppins-Regular', paddingHorizontal: moderateScale(8) }}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <CustomButton
                        title="Masuk"
                        styleUnpressed={styles.button}
                        stylePressed={styles.buttonPressed}
                        onPress={handleLogin}
                    />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = ScaledSheet.create({
    containerLogin: {
        padding: '30@ms',
        flex: 1.2,
        paddingBottom: '50@ms',
    },
    containerSelamatDatang: {
        marginBottom: '40@ms',
        zIndex: 1,
    },
    containerInput: {
        marginBottom: '15@ms',
    },
    loginInput: {
        borderWidth: 1.5,
        borderColor: '#4A4B4D',
        fontFamily: 'Poppins-Regular',
        fontSize: '12@ms',
        borderCurveRadius: '50@ms',
        paddingHorizontal: '14@ms',
        paddingVertical: '16@ms',
        borderRadius: 16
    },
    text: {
        fontSize: '25@ms',
        color: '#4A4B4D',
        textAlign: 'left',
    },
    logo: {
        width: '100@ms',
        marginTop: '20@ms',
    },
    button: {
        backgroundColor: '#4A4B4D',
        borderRadius: '50@ms',
        paddingVertical: '12@ms',
        paddingHorizontal: '24@ms',
        color: '#fff',
        fontSize: '16@ms',
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },
    buttonPressed: {
        backgroundColor: '#4A4B4D',
        opacity: 0.8,
        borderRadius: '50@ms',
        paddingVertical: '12@ms',
        paddingHorizontal: '24@ms',
        color: '#fff',
        fontSize: '16@ms',
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },
});