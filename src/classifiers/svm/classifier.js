// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export const getKernel = (controls) => {
  if (controls.svm.kernel === 'gaussian') {
    return new jsmlt.Kernel.Gaussian(10 ** controls.svm.sigmaSquared);
  } else if (controls.svm.kernel === 'polynomial') {
    return new jsmlt.Kernel.Polynomial({
      degree: controls.svm.degree,
      gamma: controls.svm.gamma,
      coef0: controls.svm.coef0,
    });
  }

  return new jsmlt.Kernel.Linear();
};

export default controls => (new jsmlt.Supervised.SVM.SVM({
  kernel: getKernel(controls),
  C: (10 ** controls.svm.C),
}));
