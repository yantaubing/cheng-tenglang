import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */} 
      <Image 
        source={require('../../assets/images/gambar23.png')}
        
         //  bisa juga menggunakan local image
        //  image: source={require('../assets/images/gambar22.png')}

        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>FREDDY</Text>
      <Text style={styles.nim}>NIDN: 243303621223</Text>
      <Text style={styles.jabatan}>Jabatan: sistem informasi</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 good night dont just kidding
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: '#ffff99',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 20,
    letterSpacing: 2,
  },
  jabatan: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 20,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});