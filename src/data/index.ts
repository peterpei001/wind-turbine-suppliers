import type { TreeNode } from '../types';
import { bladeSystem } from './system-01-blade';
import { pitchSystem } from './system-02-pitch';
import { hubSystem } from './system-03-hub';
import { drivetrainSystem } from './system-04-drivetrain';
import { generatorSystem } from './system-05-generator';
import { yawSystem } from './system-06-yaw';
import { brakeSystem } from './system-07-brake';
import { converterSystem } from './system-08-converter';
import { electricalSystem } from './system-09-electrical';
import { controlSystem } from './system-10-control';
import { cmsSystem } from './system-11-cms';
import { hydraulicSystem } from './system-12-hydraulic';
import { coolingSystem } from './system-13-cooling';
import { structureSystem } from './system-14-structure';
import { fastenerSystem } from './system-15-fastener';
import { foundationSystem } from './system-16-foundation';

export const treeData: TreeNode = {
  id: 'root',
  name: '风力发电机',
  type: 'root',
  children: [
    bladeSystem,
    pitchSystem,
    hubSystem,
    drivetrainSystem,
    generatorSystem,
    yawSystem,
    brakeSystem,
    converterSystem,
    electricalSystem,
    controlSystem,
    cmsSystem,
    hydraulicSystem,
    coolingSystem,
    structureSystem,
    fastenerSystem,
    foundationSystem,
  ],
};
