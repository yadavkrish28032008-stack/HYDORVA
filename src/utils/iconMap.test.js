/**
 * Test suite for iconMap - verifies all icons are accessible and functional
 */

import { iconMap, Icon } from './iconMap.jsx';

describe('Icon System', () => {
  describe('iconMap', () => {
    // Test that all required icons exist in the map
    test('greywater icon should exist', () => {
      expect(iconMap.greywater).toBeDefined();
      expect(typeof iconMap.greywater).toBe('function');
    });

    test('floodLevel icon should exist', () => {
      expect(iconMap.floodLevel).toBeDefined();
      expect(typeof iconMap.floodLevel).toBe('function');
    });

    test('overview icon should exist', () => {
      expect(iconMap.overview).toBeDefined();
      expect(typeof iconMap.overview).toBe('function');
    });

    test('treatment icon should exist', () => {
      expect(iconMap.treatment).toBeDefined();
      expect(typeof iconMap.treatment).toBe('function');
    });

    test('warning icon should exist', () => {
      expect(iconMap.warning).toBeDefined();
      expect(typeof iconMap.warning).toBe('function');
    });

    test('threeR icon should exist', () => {
      expect(iconMap.threeR).toBeDefined();
      expect(typeof iconMap.threeR).toBe('function');
    });

    test('alerts icon should exist', () => {
      expect(iconMap.alerts).toBeDefined();
      expect(typeof iconMap.alerts).toBe('function');
    });

    test('critical icon should exist', () => {
      expect(iconMap.critical).toBeDefined();
      expect(typeof iconMap.critical).toBe('function');
    });

    test('info icon should exist', () => {
      expect(iconMap.info).toBeDefined();
      expect(typeof iconMap.info).toBe('function');
    });

    test('system icon should exist', () => {
      expect(iconMap.system).toBeDefined();
      expect(typeof iconMap.system).toBe('function');
    });

    test('recharge icon should exist', () => {
      expect(iconMap.recharge).toBeDefined();
      expect(typeof iconMap.recharge).toBe('function');
    });

    test('all icons should be React components', () => {
      Object.entries(iconMap).forEach(([name, component]) => {
        expect(typeof component).toBe('function');
      });
    });
  });

  describe('Icon exports', () => {
    test('all individual icons should be exported', () => {
      const {
        Droplet,
        Waves,
        BarChart3,
        Zap,
        AlertTriangle,
        AlertCircle,
        Recycle,
        Bell,
        CircleAlert,
        Info,
        Wrench,
      } = require('./iconMap.jsx');

      expect(Droplet).toBeDefined();
      expect(Waves).toBeDefined();
      expect(BarChart3).toBeDefined();
      expect(Zap).toBeDefined();
      expect(AlertTriangle).toBeDefined();
      expect(AlertCircle).toBeDefined();
      expect(Recycle).toBeDefined();
      expect(Bell).toBeDefined();
      expect(CircleAlert).toBeDefined();
      expect(Info).toBeDefined();
      expect(Wrench).toBeDefined();
    });
  });
});
