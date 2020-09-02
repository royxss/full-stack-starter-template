""" //////////////////////////////////////////////////////////////////////////////////////////
                                        Unit test cases
////////////////////////////////////////////////////////////////////////////////////////// """
import sys
import os

# Adding below lines to avoid relative import error
PACKAGE_PARENT = '..'
SCRIPT_DIR = os.path.dirname(os.path.realpath(os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_PARENT)))

from api.userinfo import getData


def test_answer():
    # Test if the response object is a list or not
    assert type(getData()) == list