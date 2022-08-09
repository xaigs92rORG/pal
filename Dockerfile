#FROM chaowenguo/pal:js
#RUN ["bash", "-c", "apt install -y --no-install-recommends python3-pip; pip install jupyterlab"]

FROM python:slim
RUN pip install jupyterlab

ARG NB_USER
ARG NB_UID

RUN useradd --uid $NB_UID $NB_USER
USER $NB_USER
