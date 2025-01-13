import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const HomePage = () => {
  const features = [
    { id: 1, title: 'Fast & Secure', image: require('./src/wow.jpeg') },
    { id: 2, title: 'Easy Integration', image: require('./src/wow.jpeg') },
    { id: 3, title: '24/7 Support', image: require('./src/wow.jpeg') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to MyApp</Text>
        <Text style={styles.headerSubtitle}>
          Discover features and solutions for your daily needs
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Our Features</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <View key={feature.id} style={styles.featureCard} testID={`feature-${feature.id}`}>
              <Image style={styles.featureImage} source={feature.image} />
              <Text style={styles.featureTitle}>{feature.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaText}>Ready to get started?</Text>
        <TouchableOpacity style={styles.ctaButton} testID="cta-button">
          <Text style={styles.ctaButtonText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 MyApp. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#6200ea',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 8,
    width: Dimensions.get('window').width / 3 - 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  ctaSection: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  ctaButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#6200ea',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomePage;
