import { v4 as uuid } from 'uuid';

export const addDatapoint = (x, y) => ({
  type: 'ADD_DATAPOINT',
  id: uuid(),
  x,
  y,
});

export const updateClassifier = classifier => ({
  type: 'UPDATE_CLASSIFIER',
  classifier,
});

export const updateAddDatapointClassIndex = classIndex => ({
  type: 'UPDATE_ADD_DATAPOINT_CLASSINDEX',
  classIndex,
});

export const updateAutorunEnabled = enabled => ({
  type: 'UPDATE_AUTORUN_ENABLED',
  enabled,
});

export const updateRunStatus = status => ({
  type: 'UPDATE_RUNSTATUS',
  status: uuid(),
});

export const updateSVMKernel = kernel => ({
  type: 'UPDATE_SVM_KERNEL',
  kernel,
});

export const updateSVMC = C => ({
  type: 'UPDATE_SVM_C',
  C,
});

export const updateSVMSigmaSquared = sigmaSquared => ({
  type: 'UPDATE_SVM_SIGMA_SQUARED',
  sigmaSquared,
});

export const updateSVMDegree = degree => ({
  type: 'UPDATE_SVM_DEGREE',
  degree,
});

export const updateSVMGamma = gamma => ({
  type: 'UPDATE_SVM_GAMMA',
  gamma,
});

export const updateSVMCoef0 = coef0 => ({
  type: 'UPDATE_SVM_COEF0',
  coef0,
});

export const updateKNNNumNeighbours = numNeighbours => ({
  type: 'UPDATE_KNN_NUM_NEIGHBOURS',
  numNeighbours,
});
