import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    padding: 4,
    flex: 1,
    textAlign: 'right',
    borderRadius: 6,
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  calories: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 16,
  },
  pieChart: {
    height: 200,
    width: 200,
    marginBottom: 16,
  },
  macroText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default styles;
