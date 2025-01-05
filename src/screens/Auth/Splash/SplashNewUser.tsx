import React, { useRef, useState } from 'react';
import {
    FlatList,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
    { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus justo nisi,' },
    { id: '2', text: 'Explore our features to make the most of your experience.' },
    { id: '3', text: 'Start your journey with us today!' },
];

const OnboardingCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    const handleSkip = () => {
        flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });

    return (
        <View style={styles.container}>
            {/* Skip Button */}
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip →</Text>
            </TouchableOpacity>

            <View style={styles.carousel}>
                <FlatList
                    ref={flatListRef}
                    data={slides}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                    renderItem={({ item }) => (
                        <View style={styles.slide}>
                            <View style={styles.slideImage} />
                            <Text style={styles.slideText}>{item.text}</Text>
                        </View>
                    )}
                />

                <View style={styles.pagination}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                index === currentIndex && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>
            </View>

            {/* Next Button */}
            <TouchableOpacity
                style={styles.nextButton}
                onPress={currentIndex === slides.length - 1 ? undefined : handleNext}
            >
                <Text style={styles.nextText}>
                    {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    skipText: {
        color: '#d81b60',
        fontWeight: '600',
        fontSize: 16,
    },
    carousel: {
        width: width * 0.9,
        height: height * 0.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 6,
    },
    slide: {
        width: width * 0.9,
        marginTop: height * 0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    slideImage: {
        width: width * 0.8,
        height: height * 0.35,
        backgroundColor: '#ddd',
        marginHorizontal: width * 0.05,
        borderRadius: 10,
    },
    slideText: {
        fontSize: 16,
        height: height * 0.05,
        color: '#333',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 20,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#d81b60',
        borderRadius: 40,
        width: 35,
        height: 10,
    },
    nextButton: {
        backgroundColor: '#d81b60',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        position: 'absolute',
        bottom: height * 0.04,
        width: width * .9,

    },
    nextText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default OnboardingCarousel;
