// Standard imports
import jsmlt from '@jsmlt/jsmlt';

export const getKernel = (controls) => {
  if (controls.svm.kernel === 'gaussian') {
    return new jsmlt.Kernel.Gaussian(controls.svm.gamma);
  }

  return new jsmlt.Kernel.Linear();
};

export default controls => (new jsmlt.Supervised.SVM.SVM({
  kernel: getKernel(controls),
  C: 10 ** controls.svm.C,
}));
